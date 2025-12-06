// src/pages/center/map/Map.jsx
import React, { useEffect, useRef, useState } from 'react';
import './map.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from '../../../components/Banner/Banner';
import topImage from '../../../assets/images/BannerTop.png';
import MapImage from '../../../assets/images/map.png';


const LOCATION = { lat: 35.821973, lng: 128.528694 };
const NAVER_MAPS_SRC = 'https://oapi.map.naver.com/openapi/v3/maps.js';

function loadNaverMaps(ncpKeyId) {
  // 이미 로드됨
  if (window.naver && window.naver.maps) return Promise.resolve();

  // 이미 로딩 중이면 그 Promise 재사용
  if (window.__naverMapsLoading) return window.__naverMapsLoading;

  // 새로 로드
  window.__naverMapsLoading = new Promise((resolve, reject) => {
    const existed = Array.from(document.getElementsByTagName('script'))
      .find(s => s.src && s.src.includes('oapi.map.naver.com/openapi/v3/maps.js'));

    if (existed) {
      // 스크립트 태그는 있는데 아직 naver.maps가 없음 → onload 보장
      existed.addEventListener('load', () => resolve());
      existed.addEventListener('error', (e) => reject(e));
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.src = `${NAVER_MAPS_SRC}?ncpKeyId=${encodeURIComponent(ncpKeyId)}`;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
  });

  return window.__naverMapsLoading;
}

export const Map = () => {
  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const [error, setError] = useState('');

  const NAVER_KEY = process.env.REACT_APP_NAVER_MAPS_CLIENT_ID;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        if (!NAVER_KEY) {
          setError('네이버 지도 키(ncpKeyId)가 없습니다. .env에 REACT_APP_NAVER_MAPS_CLIENT_ID를 설정하세요.');
          return;
        }

        // 인증 실패 훅
        window.navermap_authFailure = function () {
          setError('네이버 지도 인증 실패: 키 값 또는 도메인(Referer) 허용을 확인하세요.');
        };

        await loadNaverMaps(NAVER_KEY);
        if (cancelled || !mapElRef.current) return;

        const { naver } = window;
        if (!naver || !naver.maps) {
          setError('네이버 지도 SDK 로드에 실패했습니다.');
          return;
        }

        if (!mapRef.current) {
          const center = new naver.maps.LatLng(LOCATION.lat, LOCATION.lng);
          const map = new naver.maps.Map(mapElRef.current, {
            center,
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: { position: naver.maps.Position.TOP_RIGHT }
          });
          mapRef.current = map;

          new naver.maps.Marker({ position: center, map, title: '햇살주간보호센터' });
          new naver.maps.InfoWindow({
            content: `
              <div style="padding:8px 12px;line-height:1.5;">
                <b>햇살주간보호센터</b><br/>
                대구 달서구 조암남로 38, 601호<br/>
                T. 053-644-9250
              </div>`
          }).open(map, center);
        }
      } catch (e) {
        console.error(e);
        setError('지도를 초기화하는 중 오류가 발생했습니다.');
      }
    }

    init();
    return () => { cancelled = true; };
  }, [NAVER_KEY]);

  return (
    <>
      <Navbar />
      <Banner imageSrc={topImage} title="오시는 길" />
      <div className="page-map">
        <div className="map-top">
          <img className="map-top-image" src={MapImage} alt="오시는 길 안내" />            
          <div className="map-top-text">
            <div className="map-top-text1">초행길 찾기 어려우시죠?</div>
            <div className="map-top-text2">최대한 찾기 쉽게 설명 드리겠습니다.</div>
            <div className="map-top-text3">
              고은약국 기준으로 오른쪽 입구에 들어오시고
              <br />엘리베이터 6층 누르시면, 찾아 오실 수 있습니다.
              <br /><br />알기 쉬운 건물로는 '월성동 로하스속내과'가 있으니
              <br />이 점 참고하시면 찾기 어렵지 않으실 겁니다.
            </div>
          </div>
        </div>

        <div className="map-bot">
          {error ? (
            <div className="map-error" role="alert">{error}</div>
          ) : (
            <div className="map-bot-map" ref={mapElRef} aria-label="네이버 지도" />
          )}
          <div className="map-bot-text">
            주소 : 대구광역시 달서구 조암남로 38 601호(월성동)
            <br />전화번호 : 053-644-9250
            <br />팩스번호 : 053-644-9251
            <br />이메일 : sunshine9250@naver.com
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
