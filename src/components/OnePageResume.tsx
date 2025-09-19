import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Building } from "lucide-react";
import profileImage from "../assets/1405a83f9be0643a167da61d5d48e7c0fc280b6f.png";

export function OnePageResume() {
  useEffect(() => {
    const GA_ID = 'G-WBPFYQR622';
    const existing = document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`);
    if (!existing) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    }
    (window as any).dataLayer = (window as any).dataLayer || [];
    const gtag = (...args: any[]) => { (window as any).dataLayer.push(args); };
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);
  return (
    <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
      {/* 헤더 섹션 */}
      <div className="flex items-start gap-5 mb-5">
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={profileImage} 
            alt="프로필 사진" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1"> {'\u00A0'}박재흥</h1>
          <p className="text-base text-muted-foreground mb-3">{'\u00A0'}{'\u00A0'}관심분야: 시계열 예측, ML/DL, LLM, RAG</p>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>james4327@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>010-5626-4327</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>인천, 대한민국</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-3 h-3" />
              <span>github.com/Datawizardd</span>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 기술 */}
      {/* <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          <Badge className="text-xs px-2 py-1">Python</Badge>
          <Badge className="text-xs px-2 py-1">Machine Learning</Badge>
          <Badge className="text-xs px-2 py-1">Deep Learning</Badge>
          <Badge className="text-xs px-2 py-1">RAG</Badge>
          <Badge className="text-xs px-2 py-1">Phoenix</Badge>
          <Badge className="text-xs px-2 py-1">AI Agent</Badge>
          <Badge className="text-xs px-2 py-1">TensorFlow</Badge>
          <Badge className="text-xs px-2 py-1">PyTorch</Badge>
        </div>
      </div> */}

      {/* 경력 */}
      <Card className="mb-4">
        <CardHeader className="pb-1">
          <CardTitle className="text-lg">경력</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold">Intern</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="w-3 h-3" />
                  <span>프라이스워터하우스쿠퍼스컨설팅</span>
                  <Calendar className="w-3 h-3 ml-2" />
                  <span>2025.04 - 2025.07</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm mb-2 text-muted-foreground">
            삼성전자 SCM GenAI Pilot 구축 프로젝트
            </p>
            
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li><strong>문서 전처리:</strong> 워크플로우 데이터·SCM 용어집/매뉴얼 전처리</li>
              <li><strong>VectorDB 및 Embedding:</strong> Bge-m3 모델을 통해 임베딩 및 pgvector 색인</li>
              <li><strong>Query Expansion 설계:</strong> Query Expansion 메커니즘 설계로 질의 이해·검색 성능 향상</li>
              <li><strong>Phoenix 연동 및 Streamlit UI 구현:</strong> Retrieval 관찰성(Observability) 구축 및 사용자 상호작용 지원</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 주요 프로젝트 */}
      <Card className="mb-4">
        <CardHeader className="pb-1">
          <CardTitle className="text-lg">주요 프로젝트</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-semibold">설명가능한 인공지능 활용 서울시 지하철 혼잡도 예측과 정책적 의사결정 지원을 위한 비즈니스 애널리틱스</h4>
              <Badge variant="outline" className="text-xs">한국빅데이터학회지 · 2025년 6월</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Random Forest 알고리즘으로 95% 이상 미래 혼잡도 예측 성능 달성 및 SHAP 알고리즘을 통해 비즈니스 인사이트 도출
            </p>
          </div>

          <div>
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-semibold">딥러닝과 은닉 마르코프 모델을 연계한 연속적인 손 제스처 적출에 관한 연구</h4>
              <Badge variant="outline" className="text-xs">정보과학회 컴퓨팅의 실제 논문지(KTCP) · 2025년 9월</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              LSTM Autoencoder로 특징을 추출하고, Gaussian HMM 기반 패턴 인식과 임계치 모델 결합하여 98.08% 인식률과 5.60% 단어오류율 달성
            </p>
          </div>

          <div>
          <div className="flex items-start justify-between mb-1">
              <h4 className="font-semibold mb-1">이벤트 지표와 감성 분석을 결합한 환율 예측</h4>
              <Badge variant="outline" className="text-xs">투고 중</Badge>
          </div>
            <p className="text-sm text-muted-foreground">
               CNN-LSTM 기반 딥러닝 알고리즘으로 MSE=47.71, MAPE=0.39% 달성
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 2열 레이아웃 - 학력과 기타 */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-base">학력</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm">무역학·컴퓨터공학 복수전공</h4>
              <p className="text-xs text-muted-foreground">인천대학교 | GPA 3.78/4.5</p>
              <p className="text-xs text-muted-foreground">2018.03 - 2025.08</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm">영어·일본어 전공</h4>
              <p className="text-xs text-muted-foreground">인천외국어고등학교</p>
              <p className="text-xs text-muted-foreground">2015.03 - 2018.02</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-base">자격증</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                
              <span className="text-sm font-medium">ADsP</span>
              <span className="text-xs text-muted-foreground">2024.11</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SQLD</span>
                <span className="text-xs text-muted-foreground">2024.06</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">MOS MASTER</span>
                <span className="text-xs text-muted-foreground">2020.09</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>



      {/* 기타 경험 */}
      <Card>
        <CardHeader className="pb-1">
          <CardTitle className="text-base">기타 경험</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">

          <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-sm">Business Analytics & Social AI Lab</h4>
                <p className="text-xs text-muted-foreground">KTX 수요 예측, 기부자 특성 분석 프로젝트 진행</p>
              </div>
              <span className="text-xs text-muted-foreground">2024.03-2025.08</span>
            </div>



            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-sm">국민은행 디지털 서포터즈</h4>
                <p className="text-xs text-muted-foreground">신현동지점</p>
              </div>
              <span className="text-xs text-muted-foreground">2024.01-2024.02</span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-sm">캘리포니아 주립대 교환학생</h4>
                
              </div>
              <span className="text-xs text-muted-foreground">2023.08-2023.12</span>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* 페이지 번호 */}
      <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
        1
      </div>
    </div>
  );
}