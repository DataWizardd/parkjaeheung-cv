import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Building, ExternalLink, Code, Database, Brain, TrendingUp, Users, Globe, MessageSquare, FileText, BarChart3, Sparkles, Network, CalendarClock, Workflow, Layers, Filter } from "lucide-react";
import profileImage from "../assets/1405a83f9be0643a167da61d5d48e7c0fc280b6f.png";
import shapSummaryPlot from "../assets/shap_summary_plot.jpg";
import shapForcePlot from "../assets/shap_force_plot.jpg";
import mediapipeImg from "../assets/mediapipe.jpg";
import logLikelihoodImg from "../assets/Log-likelihood graph.jpg";
import forecastingImg from "../assets/forecasting.jpg";
import hitmapImg from "../assets/hitmap.jpg";
import miraeassetImg from "../assets/miraeasset.jpg";
import agentImg from "../assets/agent.jpg";
import skillImg from "../assets/skill.jpg";
import gleeImg from "../assets/glee.jpg";
import architectureImg from "../assets/Architecture.jpg";
import bestmodelImg from "../assets/bestmodel.jpg";
import pwc from "../assets/pwc.jpg";

// StatCard 컴포넌트 정의
const StatCard = ({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub: string }) => (
  <div className="bg-gray-50 rounded-lg p-3 text-center">
    <Icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
    <div className="text-sm font-medium">{label}</div>
    <div className="text-lg font-bold text-blue-600">{value}</div>
    <div className="text-xs text-gray-500">{sub}</div>
  </div>
);

export function Portfolio() {
  useEffect(() => {
    const GA_ID = 'G-WBPFYQR622';
    const existing = document.querySelector(`script[src=\"https://www.googletagmanager.com/gtag/js?id=${GA_ID}\"]`);
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
    <div className="portfolio-container">
      {/* 프로젝트 1: PwC SCM GenAI */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">PwC 컨설팅 (삼성전자 프로젝트)</h2>
            </div>
            <Badge variant="outline" className="mb-3">2025.04 – 2025.07</Badge>
            <p className="text-lg text-muted-foreground mb-4">Intern — SCM GenAI Pilot 구축 참여</p>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">RAG</Badge>
              <Badge className="text-xs px-2 py-1">pgvector</Badge>
              <Badge className="text-xs px-2 py-1">Phoenix</Badge>
              <Badge className="text-xs px-2 py-1">Streamlit</Badge>
              <Badge className="text-xs px-2 py-1">PostgreSQL</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Gen AI를 활용한 내외부 정형 및 비정형 데이터 검색을 통해 SCM 업무 데이터를 효과적으로 활용하고, 
              SCM 시스템의 사용성을 극대화하는 것을 목표로 함.
            </p>
          </div>

          {/* 프로젝트 이미지 영역 */}
          <div className="bg-gray-50 rounded-lg flex items-center justify-center" style={{ minHeight: '100px' }}>
            <div className="text-center text-gray-300 w-full">
              <img src={pwc} alt="pwc" className="w-32 h-auto mx-auto rounded" />
            </div>
          </div>
        </div>


        <div className="space-y-4">
          <h3 className="font-semibold text-lg">주요 성과</h3>
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>Shortseason Data EDA 수행: 데이터 타입 검증, 결측치/이상치 탐지, 분포·조합 분석</li>
            <li>Workflow Tree DB 구축 및 프로세스 클러스터링</li>
            <li>비정형 데이터(pptx, docx, excel, json 등) 전처리 및 메타데이터 생성</li>
            <li>On-Disk 환경에서 Chroma, Faiss, Qdrant 벡터 DB 비교·검증</li>
            <li>On-Premise(Postgres + pgvector) 환경에서 DBeaver/VSCode 기반 DB 연계 및 임베딩 업데이트 파이프라인 구축</li>
            <li>평가 데이터셋 생성 및 멀티 리트리버 활용, 비동기 처리 적용</li>
            <li>Query Expansion 메커니즘 설계로 질의 이해·검색 성능 향상</li>
            <li>Phoenix 연동으로 Retrieval 관찰성(Observability) 구축</li>
            <li>Streamlit UI 설계·배포 및 결과 시각화, 사용자 상호작용 지원 (사이드바 파라미터 조절 포함)</li>
          </ul>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          1
        </div>
      </div>

      {/* 프로젝트 2: 지하철 혼잡도 예측 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-bold">지하철 승강장 혼잡도 예측</h2>
            </div>
            <Badge variant="outline" className="mb-3">한국빅데이터학회 게재</Badge>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">Random Forest</Badge>
              <Badge className="text-xs px-2 py-1">XGBoost</Badge>
              <Badge className="text-xs px-2 py-1">LightGBM</Badge>
              <Badge className="text-xs px-2 py-1">SHAP</Badge>
              <Badge className="text-xs px-2 py-1">Feature Engineering</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              서울 지하철 1-8호선의 혼잡도를 예측하는 머신러닝 모델을 개발했습니다. 
              시간대별 승하차 인원, 환승 정보, 날씨 데이터 등을 활용하여 95% 이상의 예측 정확도를 달성했으며,
              SHAP 알고리즘을 통해 혼잡도에 영향을 미치는 주요 요인들을 분석했습니다.
            </p>
          </div>
        </div>

        {/* 핵심 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={BarChart3} label="예측 정확도" value="95.2%" sub="테스트 기준" />
          <StatCard icon={Sparkles} label="설명 가능성" value="SHAP 인과 탐색" sub="변수 기여·방향 제시" />
          <StatCard icon={Database} label="데이터 규모" value="1.2M+" sub="승하차 기록" />
        </div>

        {/* 상세 설명 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">핵심 성과</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>Random Forest 기반으로 <b>95.2% 예측 정확도</b> 달성</li>
              <li>시간대별·요일별·계절별 패턴 분석으로 혼잡도 예측 모델 구축</li>
              <li>SHAP 알고리즘으로 혼잡 가중·완화 요인 해석</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">비즈니스 임팩트</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>환승노선 확충/환승 유입 유도 → 혼잡 완화 방향성 확인</li>
              <li>섬식 플랫폼이 혼잡도 유발 요인 중 하나임을 확인</li>
              <li>월·화 피크 타깃 근무 유연화(시차 출근) 정책 근거 제공</li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          2
        </div>
      </div>

      {/* 프로젝트 3: SHAP 분석 결과 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">SHAP 분석 결과</h2>
          <p className="text-sm text-muted-foreground mb-6">
            지하철 혼잡도 예측 모델의 변수 중요도와 기여도를 SHAP 알고리즘으로 분석한 결과입니다.
          </p>
        </div>

        {/* SHAP 이미지 섹션 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-sm">SHAP Summary Plot(우선순위 1-12)</h3>
            <div className="bg-white rounded border p-3">
              <img 
                src={shapSummaryPlot} 
                alt="SHAP Summary Plot" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-sm">SHAP Decision Plot(혼잡도 높을 때)</h3>
            <div className="bg-white rounded border p-3">
              <img 
                src={shapForcePlot} 
                alt="SHAP Force Plot" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          3
        </div>
      </div>

      {/* 프로젝트 3: 연속 손 제스처 적출 연구 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold">연속적인 손 제스처 적출 연구</h2>
            </div>
            <Badge variant="outline" className="mb-3">한국정보과학회 게재 예정</Badge>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">LSTM Autoencoder</Badge>
              <Badge className="text-xs px-2 py-1">Gaussian HMM</Badge>
              <Badge className="text-xs px-2 py-1">MediaPipe</Badge>
              {/* <Badge className="text-xs px-2 py-1">PyTorch</Badge> */}
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              딥러닝과 은닉 마르코프 모델(HMM)을 결합한 연속 손동작 기반 제스처 적출(spotting) 방법을 제안함.
              연속 손동작에서 제스처를 98.08%의 인식률과 5.60%의 단어오류율(WER)로 적출함.
            </p>
          </div>

          {/* 프로젝트 이미지 영역 */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center" style={{ minHeight: '200px' }}>
            <div className="text-center text-gray-500 w-full">
              <img src={mediapipeImg} alt="MediaPipe Demo" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>

        {/* 핵심 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={BarChart3} label="인식률" value="98.08%" sub="연속 적출 평가" />
          <StatCard icon={BarChart3} label="WER" value="5.60%" sub="삽입·삭제·대체 포함" />
          <StatCard icon={Network} label="제스처 클래스" value="10종" sub="프레젠테이션 제스처" />
          {/* <StatCard icon={Sparkles} label="Segmental F1" value="0.985–1.000" sub="다수 제스처에서" /> */}
        </div>


        {/* 상세 설명 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">문제 정의</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>연속 손동작 스트림에서 <b>제스처 구간 탐지 + 인식</b>을 동시에 수행해야 함</li>
              <li>비제스처 구간이 많고, 제스처 간 경계가 모호하여 오탐/누락 위험</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">데이터셋</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>MediaPipe Hands: 프레임당 21개 랜드마크(3D) 추출</li>
              <li>전처리: 중심 정렬, 크기 정규화, 저대역 필터링</li>
              <li>명령 제스처 10종(학습 100/제스처, 테스트 20/제스처)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">모델 구조</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>LSTM Autoencoder로 시퀀스 <em>latent</em> 임베딩 추출</li>
              <li>Gaussian HMM으로 시공간 변이를 모델링(Forward·Baum-Welch)</li>
              <li>임계치 모델로 비제스처 구간 필터링 → 오탐 감소</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">평가 & 인사이트</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>연속 입력 기준 평균 인식률 98.08%, WER 5.60%</li>
              <li>유사 시작 동작·짧은 길이(20~25f)에서 삽입/삭제 에러 증가 경향</li>
              <li>비제스처 구간 필터링 효과 확인</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">주요 성과</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>딥러닝과 HMM을 연계한 연속적인인 손 제스처 적출 연구</li>
            <li>MediaPipe Hands 기반 손 추적</li>
            <li>LSTM Autoencoder로 특징 추출</li>
            <li>Gaussian HMM 기반 패턴 인식과 임계치 모델 결합</li>
            <li>실시간 제스처 기반 인터페이스에 효과적임을 실험으로 검증</li>
            <li>손동작 시계열 데이터의 복잡성과 비제스처 구간 문제를 효과적으로 해결</li>
            </ul>
          </div>
        </div>
        



        {/* Log-likelihood 그래프 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-sm">Log-likelihood graph of gesture models and
            threshold model</h3>
          <div className="bg-white rounded border p-3">
            <img 
              src={logLikelihoodImg}
              alt="Log-likelihood Graph"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          3
        </div>
      </div>

      {/* 프로젝트 4: 환율 예측 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-indigo-500" />
              <h2 className="text-xl font-bold">환율 예측</h2>
            </div>
            <Badge variant="outline" className="mb-3">투고 예정</Badge>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">LSTM</Badge>
              <Badge className="text-xs px-2 py-1">GRU</Badge>
              <Badge className="text-xs px-2 py-1">CNN-LSTM</Badge>
              <Badge className="text-xs px-2 py-1">CNN-GRU</Badge>
              {/* <Badge className="text-xs px-2 py-1">TensorFlow</Badge> */}
              <Badge className="text-xs px-2 py-1">Sentiment Analysis</Badge>

            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              글로벌 이벤트(GDELT)와 뉴스 요약 감성 지표를 <b>거시/시장 베이스라인</b>에 결합해 USD/KRW 종가를 예측하는 
               <b> 딥러닝 프레임워크</b>를 설계했습니다. 피처 조합별 성능을 체계적으로 비교하고,
              시각화(예측 곡선/Permutation Importance/상관 히트맵)로 해석 가능성을 높였습니다.
            </p>

            <h3 className="font-semibold mb-2">입력 피처 조합</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="text-xs px-2 py-1">🟦 Baseline (거시/시장)</Badge>
              <Badge className="text-xs px-2 py-1">🟩 + GDELT</Badge>
              <Badge className="text-xs px-2 py-1">🟨 + 뉴스 감성</Badge>
              <Badge className="text-xs px-2 py-1">🟧 + GDELT + 뉴스 감성</Badge>
            </div>

            <h3 className="font-semibold mb-2">예측 모델</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">LSTM</Badge>
              <Badge className="text-xs px-2 py-1">GRU</Badge>
              <Badge className="text-xs px-2 py-1">CNN‑LSTM</Badge>
              <Badge className="text-xs px-2 py-1">CNN‑GRU</Badge>
            </div>
          </div>
        </div>

        {/* 핵심 지표 & 실험 설정 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={BarChart3} label="Best MSE" value="47.71" sub="테스트 기준" />
          <StatCard icon={BarChart3} label="Best MAPE" value="0.39%" sub="테스트 기준" />
          {/* <StatCard icon={CalendarClock} label="Shift" value="+1일" sub="다음날 종가 예측" /> */}
          <StatCard icon={Database} label="Seeds×Lookback" value="3×6 조합" sub="42/55/68 × 5~90일" />
        </div>

        {/* 성과 & 결론 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">주요 성과</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>CNN‑LSTM 기반 실험에서 <b>MSE 47.71, MAPE 0.39%</b> 달성</li>
              <li>이벤트(GDELT)·감성 지표 결합 시 베이스라인 대비 성능 개선</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">결론</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>비정형 데이터(뉴스·글로벌 이벤트)의 환율 예측 활용 가능성 확인</li>
              <li>피처 조합/모델/윈도우 크기 전개로 <em>견고성</em> 확보(조건별 평균 성능)</li>
            </ul>
          </div>
        </div>

        {/* Forecasting 이미지 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-sm">CNN-LSTM + GDELT + 뉴스 감성 예측 프레임워크</h3>
          <div className="bg-white rounded border p-3">
            <img 
              src={forecastingImg}
              alt="Forecasting Framework"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* 히트맵 이미지 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-sm">Correlation Heatmap</h3>
          <div className="bg-white rounded border p-3">
            <img 
              src={hitmapImg}
              alt="Correlation Heatmap"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          4
        </div>
      </div>

      {/* 프로젝트 5: 증권사 AI Portal 서비스 제안 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-6 h-6 text-teal-500" />
              <h2 className="text-xl font-bold">증권사 AI Portal 서비스 제안</h2>
            </div>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">AI Agent</Badge>
              <Badge className="text-xs px-2 py-1">모듈형 설계</Badge>
              <Badge className="text-xs px-2 py-1">RAG</Badge>
              {/* <Badge className="text-xs px-2 py-1">투자 분석</Badge> */}
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              미래에셋증권 제 9회 AI Festival에서 종합적인 AI Portal 서비스를 제안했습니다. 
              대규모 언어 모델을 활용하여 주가 탐지부터 종목 추천, 뉴스 요약, 맞춤형 리포트 생성, 챗봇 응답까지
              통합적으로 제공해주는 AI Agent 기반 개인 맞춤형 종합 분석 서비스입니다.

            </p>
          </div>

          {/* 프로젝트 이미지 영역 */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center" style={{ minHeight: '200px' }}>
            <div className="text-center text-gray-500 w-full">
              <img src={miraeassetImg} alt="Mirae Asset AI Portal" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-lg">주요 성과</h3>
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>Alert, Insight, Report, Discovery, Chatbot 모듈형 AI 에이전트 설계</li>
            <li>투자 분석, 개인화 인사이트, 대화형 금융 서비스 기능 구현</li>
          </ul>
        </div>

        {/* 모듈 설명 */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">모듈</h3>
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li><b>Alert Agent</b>: 포트폴리오 이슈 선제적 알림</li>
            <li><b>Insight Agent</b>: 카드형 인사이트 요약 제공</li>
            <li><b>Report Agent</b>: STORM 기반 종목 및 테마 리포트 작성<br /><i>(Synthesis → Topic → Outline → Retrieval → Multi‑perspective Question Asking)</i></li>
            <li><b>Discover Agent</b>: 유망 종목 자동 발굴 및 추천</li>
            <li><b>Chatbot Agent</b>: 자연어 기반 투자 질의응답</li>
          </ul>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          5
        </div>
      </div>

      {/* 프로젝트 6: AI Agent & System Architecture */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">AI Agent & System Architecture</h2>
          <p className="text-sm text-muted-foreground mb-6">
            증권사 AI Portal 서비스의 AI Agent 구조와 시스템 아키텍처입니다.
          </p>
        </div>

        {/* AI Agent & Skill 이미지 */}
        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-sm">AI Agent</h3>
            <div className="bg-white rounded border p-3">
              <img 
                src={agentImg}
                alt="AI Agent Architecture"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-sm">System Architecture</h3>
            <div className="bg-white rounded border p-3">
              <img 
                src={skillImg}
                alt="Skill Matrix"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          6
        </div>
      </div>

      {/* 프로젝트 7: AI 글쓰기 보조 에이전트 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-6 h-6 text-pink-500" />
              <h2 className="text-xl font-bold">AI 글쓰기 보조 에이전트</h2>
            </div>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">AI Agent</Badge>
              <Badge className="text-xs px-2 py-1">오케스트레이터</Badge>
              <Badge className="text-xs px-2 py-1">맥락 인식</Badge>
              <Badge className="text-xs px-2 py-1">모듈형 설계</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              상황별 맥락 인식 기반의 글쓰기 지원을 위해 <b>오케스트레이터</b>와 <b>모듈형 에이전트</b>를 설계했습니다.
              대화 이미지(OCR)·사용자 의도·톤·목적을 결합해 <b>맞춤형 제안</b>과 <b>수정/개선</b>을 제공합니다.
            </p>
          </div>

          {/* 프로젝트 이미지 영역 */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[200px] overflow-hidden">
            <img src={gleeImg} alt="Writing Assistant" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">기술 스택</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="text-xs px-2 py-1">Python</Badge>
            <Badge className="text-xs px-2 py-1">FastAPI</Badge>
            <Badge className="text-xs px-2 py-1">MongoDB</Badge>
            <Badge className="text-xs px-2 py-1">Nginx</Badge>
            <Badge className="text-xs px-2 py-1">Docker</Badge>
            <Badge className="text-xs px-2 py-1">GitHub Actions</Badge>
            <Badge className="text-xs px-2 py-1">CLOVA OCR</Badge>
            <Badge className="text-xs px-2 py-1">CLOVA Studio</Badge>
            <Badge className="text-xs px-2 py-1">Kakao OAuth</Badge>
          </div>
        </div>

        {/* 핵심 기능 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">핵심 기능</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                <b>사용자 관리</b>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>카카오 소셜 로그인(<i>Kakao OAuth</i>)과 JWT 기반 토큰 관리</li>
                  <li>사용자 프로필 조회</li>
                </ul>
              </li>
              <li>
                <b>AI 글 제안 기능</b>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>AI 기반 초안/제안 생성</li>
                  <li>OCR 기반 대화 사진 속 상황·말투·목적 분석(<i>CLOVA OCR</i>)</li>
                  <li>분석 맥락에 따른 맞춤형 글 제안 생성(<i>tone/persona/goal</i>)</li>
                  <li>사용자 요청에 따른 글 수정/리라이팅</li>
                  <li>최근 생성 제안 & 저장한 글 <b>조회·수정·삭제</b></li>
                  <li>태그 및 추천 기능</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <div className="rounded-xl border border-gray-200 p-4 h-full">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><Workflow className="w-4 h-4" /> 오케스트레이션 개요</h4>
              <p className="text-sm text-muted-foreground mb-2">
                입력(이미지/텍스트) → <b>컨텍스트 빌더</b>(OCR·메타데이터) → <b>초안 생성/수정</b>(프롬프트·정책) → <b>저장/추천</b> 파이프라인.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          7
        </div>
      </div>

      {/* 프로젝트 8: AI Writing Assistant Architecture */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">AI Writing Assistant Architecture</h2>
          <p className="text-sm text-muted-foreground mb-6">
            AI 글쓰기 보조 에이전트의 전체 시스템 아키텍처입니다.
          </p>
        </div>

        {/* Architecture 이미지 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-sm">AI Writing Assistant Architecture</h3>
          <div className="bg-white rounded border p-3">
            <img 
              src={architectureImg}
              alt="AI Writing Assistant Architecture"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          8
        </div>
      </div>

      {/* 프로젝트 9: KTX 수요 예측 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-bold">KTX 수요 예측</h2>
            </div>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">Machine Learning</Badge>
              <Badge className="text-xs px-2 py-1">Deep Learning</Badge>
              <Badge className="text-xs px-2 py-1">Pandas</Badge>
              <Badge className="text-xs px-2 py-1">scikit‑learn</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              한국의 주요 <b>KTX 5개 노선</b>(경부·경전·동해·전라·호남)의 <b>월별 승차 수요</b>를 예측하는 다중 모델 시스템을 구축했습니다.
              노선별 특성에 맞춰 머신러닝/딥러닝 6종을 비교하고 <b>Best Model</b>을 선택하여 예측 정확도를 높였습니다.
            </p>
          </div>
        </div>

        {/* 핵심 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={Database} label="데이터 기간" value="2015.01 – 2024.03" sub="월별 집계" />
          <StatCard icon={BarChart3} label="종속변수" value="승차인원수" sub="노선×월" />
          <StatCard icon={CalendarClock} label="예측 대상" value="5개 노선 월별 수요" sub="경부·경전·동해·전라·호남" />
        </div>

        {/* 데이터 & 피처 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">데이터셋 & 피처</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>종속변수: <b>승차인원수</b> (노선×월)</li>
              <li>독립변수: 날짜 파생(월/분기/공휴일 등), <b>좌석·운행</b> 변수, <b>한국 CPI</b>, <b>KOSPI</b>,
              <b> lag</b> 피처(과거 승차인원)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">모델링</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>알고리즘: RF, XGBoost, LightGBM, CatBoost, LSTM, GRU</li>
              <li>평가 지표: MSE, RMSE, MSPE, MAE, <b>MAPE</b>, MedAE, MedAPE</li>
              <li>노선별 Best Model 선정(테스트 성능 기반)</li>
            </ul>
          </div>
        </div>

        {/* 성과 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">주요 성과</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>경부선: <b>RandomForest</b> — MAPE 2.27%</li>
              <li>경전선: <b>XGBoost</b> — MAPE 2.72%</li>
              <li>동해선: <b>LSTM</b> — MAPE 3.05%</li>
              <li>전라선: <b>XGBoost</b> — MAPE 1.68%</li>
              <li>호남선: <b>RandomForest</b> — MAPE 1.99%</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">비즈니스 인사이트</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>노선별 계절·경제 지표 효과 반영으로 <b>운행 편성/좌석 배분</b> 최적화 근거 제공</li>
              <li>MAPE 2%대 성능을 바탕으로 <b>수요 급증/감소 조기 탐지</b> 및 영업 계획 수립 지원</li>
            </ul>
          </div>
        </div>

        {/* Best Model 이미지 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-sm">Best Model Performance</h3>
          <div className="bg-white rounded border p-3">
            <img 
              src={bestmodelImg}
              alt="Best Model Performance"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          9
        </div>
      </div>

      {/* 프로젝트 10: 기부자 특성 분석 */}
      <div className="portfolio-page" style={{ minHeight: '297mm', padding: '12mm' }}>
        <div className="mb-6">
          {/* 프로젝트 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-bold">기부자 특성 분석</h2>
            </div>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">Machine Learning</Badge>
              <Badge className="text-xs px-2 py-1">Feature Engineering</Badge>
              <Badge className="text-xs px-2 py-1">SHAP</Badge>
              <Badge className="text-xs px-2 py-1">Pandas</Badge>
              <Badge className="text-xs px-2 py-1">scikit‑learn</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              기부자들의 특성을 분석하여 기부 행동을 예측하고 이해하는 머신러닝 모델을 개발했습니다.
              다양한 알고리즘을 비교 분석하고 SHAP를 활용하여 변수 중요도를 분석했습니다.
            </p>

            {/* <h3 className="font-semibold mb-2">프로젝트 배경</h3>
            <p className="text-sm text-muted-foreground mb-4">
              비영리 조직의 지속가능한 발전을 위해서는 기부자들의 특성을 정확히 파악하고, 
              이를 바탕으로 효과적인 기부 캠페인을 설계하는 것이 중요합니다. 
              본 프로젝트는 기부자 데이터를 분석하여 기부 확률을 예측하는 모델을 구축하고, 
              SHAP 알고리즘을 통해 기부 결정에 영향을 미치는 주요 요인들을 식별했습니다.
            </p> */}

            <h3 className="font-semibold mb-2">데이터 소스 및 전처리</h3>
            <p className="text-sm text-muted-foreground mb-4">
              한국복지패널(KOWEPS) 데이터를 활용하여 2005년부터 2023년까지의 기부 관련 정보를 수집했습니다.
              연령, 성별, 교육수준, 소득수준, 거주지역, 가족구성, 건강상태 등 다양한 인구통계학적 특성과 
              기부 이력, 기부 금액, 기부 동기 등 기부 관련 변수들을 체계적으로 정리했습니다.
              결측치 처리, 이상치 탐지, 범주형 변수 인코딩 등의 전처리 과정을 거쳐 
              머신러닝 모델 학습에 적합한 형태로 데이터를 가공했습니다.
            </p>
          </div>
        </div>

        {/* 핵심 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={BarChart3} label="예측 정확도" value="85.2%" sub="테스트 기준" />
          <StatCard icon={Users} label="데이터 규모" value="10K+" sub="기부자 기록" />
          <StatCard icon={Sparkles} label="설명 가능성" value="SHAP 분석" sub="변수 중요도" />
        </div>

        {/* 상세 설명 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">핵심 성과</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>Random Forest 기반으로 <b>85.2% 예측 정확도</b> 달성</li>
              <li>기부자 특성별 패턴 분석으로 기부 행동 예측 모델 구축</li>
              <li>SHAP 알고리즘으로 기부 결정 요인 해석</li>
              <li>기부 확률이 높은 잠재 기부자 선별 모델 구축</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">비즈니스 임팩트</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>기부자 타겟팅 전략 수립을 위한 데이터 기반 인사이트 제공</li>
              <li>기부 캠페인 효과성 향상을 위한 개인화 접근 방향 제시</li>
              {/* <li>기부자 유지 및 확대를 위한 전략적 의사결정 지원</li> */}
              {/* <li>비영리 조직의 수익성과 지속가능성 향상에 기여</li> */}
            </ul>
          </div>
        </div>

        {/* 기술적 세부사항 */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">기술적 접근</h3>
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>피처 엔지니어링: 연령대, 성별, 지역, 과거 기부 이력, 소득수준, 교육수준 등</li>
            <li>모델 비교: Random Forest, XGBoost, LightGBM, SVM 등 다양한 알고리즘 테스트</li>
            <li>XAI: <b>SHAP</b> Summary/Dependence로 <b>주요 변수 식별</b></li>
            <li>SHAP 기반 변수 중요도 분석 및 <b>기부 결정 요인</b> 도출</li>
            <li>클래스 불균형 문제 해결을 위한 다양한 샘플링 기법 적용</li>
            <li>교차 검증을 통한 모델의 일반화 성능 검증</li>
          </ul>
        </div>

        {/* 추가 분석 결과 */}
        {/* <div className="mb-6">
          <h3 className="font-semibold mb-2">주요 발견사항</h3>
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>연령대별 기부 패턴: 40-50대가 가장 높은 기부율을 보이며, 20-30대는 상대적으로 낮음</li>
            <li>소득수준과 기부의 상관관계: 소득이 높을수록 기부 확률이 증가하지만, 일정 수준 이상에서는 포화</li>
            <li>지역별 차이: 수도권과 지방 간 기부 문화의 차이를 확인</li>
            <li>교육수준의 영향: 고등교육을 받은 그룹에서 기부 참여도가 높음</li>
            <li>가족구성의 영향: 자녀가 있는 가구에서 기부 참여도가 상대적으로 높음</li>
          </ul>
        </div> */}

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          10
        </div>
      </div>
    </div>
  );
} 