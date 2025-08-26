import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Building, ExternalLink, Code, Database, Brain, TrendingUp, Users, Globe, MessageSquare, FileText, BarChart3, Sparkles, Network, CalendarClock, Workflow, Layers, Filter } from "lucide-react";
import profileImage from "figma:asset/1405a83f9be0643a167da61d5d48e7c0fc280b6f.png";
import shapSummaryPlot from "figma:asset/shap_summary_plot.jpg";
import shapForcePlot from "figma:asset/shap_force_plot.jpg";
import mediapipeImg from "figma:asset/mediapipe.jpg";
import logLikelihoodImg from "figma:asset/Log-likelihood graph.jpg";
import forecastingImg from "figma:asset/forecasting.jpg";
import hitmapImg from "figma:asset/hitmap.jpg";
import miraeassetImg from "figma:asset/miraeasset.jpg";
import agentImg from "figma:asset/agent.jpg";
import skillImg from "figma:asset/skill.jpg";
import gleeImg from "figma:asset/glee.jpg";
import architectureImg from "figma:asset/Architecture.jpg";
import bestmodelImg from "figma:asset/bestmodel.jpg";
import pwc from "figma:asset/pwc.jpg";

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
              삼성전자의 공급망(SCM) 워크플로우에 생성형 AI를 통합하여 업무 효율성을 극대화하는 
              GenAI Pilot 시스템을 구축했습니다. RAG 파이프라인과 벡터 데이터베이스를 활용하여 
              문서 검색 및 질의응답 시스템을 구현했습니다.
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
            <li>공급망(SCM) 워크플로우에 생성형 AI 통합: RAG 파이프라인 및 pgvector 색인</li>
            <li>워크플로우 데이터·SCM 용어집/매뉴얼 전처리 및 검색 품질 개선</li>
            <li>Phoenix 연동으로 Retrieval 관찰성(Observability) 구축</li>
            <li>Streamlit UI 설계·배포 및 결과 시각화, 사용자 상호작용 지원</li>
            <li>Query Expansion 메커니즘 설계로 질의 이해·검색 성능 향상</li>
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
              <h2 className="text-xl font-bold">지하철 혼잡도 예측</h2>
            </div>
            <Badge variant="outline" className="mb-3">한국빅데이터학회 게재</Badge>
            
            <h3 className="font-semibold mb-2">주요 기술</h3>
            <div className="flex flex-wrap gap-1 mb-4">
              <Badge className="text-xs px-2 py-1">Random Forest</Badge>
              <Badge className="text-xs px-2 py-1">Python</Badge>
              <Badge className="text-xs px-2 py-1">Scikit-learn</Badge>
              <Badge className="text-xs px-2 py-1">Pandas</Badge>
              <Badge className="text-xs px-2 py-1">SHAP</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              시민들이 승하차하는 과정에서 느낄 수 있는 혼잡도를 실시간으로 빠르고 정확하게 예측 및 설명함으로써
              빅데이터 기반 실제 비즈니스의 활용도를 높이는 비즈니스 애널리틱스 방법론을 제시하고자 함.
            </p>
          </div>
        </div>

        {/* 핵심 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={BarChart3} label="예측 성능" value="> 95% 이상" sub="Random Forest 기준" />
          <StatCard icon={Database} label="데이터 소스" value="6개 공공 DB 융합" sub="승·하차/환승/출입구/플랫폼/기상 등" />
          <StatCard icon={Sparkles} label="설명 가능성" value="SHAP 인과 탐색" sub="변수 기여·방향 제시" />
        </div>

        {/* 상세 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">문제 정의</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>피크 시간대 혼잡으로 인한 안전 리스크·지연·만족도 하락</li>
              <li>현장 대응을 위한 <b>사전 경보</b>와 <b>정책 효과 추정</b> 필요</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">데이터셋</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>역/호선/시간대별 승·하차, 환승 유입, 출입구, 플랫폼 형태(섬식/상대식)</li>
              <li>기상(강수/기온), 달력/요일, 이벤트 지표 등 메타데이터</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">모델링 & 설명</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>대표적인 머신러닝/딥러넹넹 모델 비교 및 최적화</li>
              <li>SHAP 알고리즘으로 혼잡 가중·완화 요인 해석</li>
              {/* <li>역/시간대 단위의 <em>what‑if</em> 시뮬레이션(환승노선 수, 플랫폼 형태, 출입구 구성)</li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">비즈니스 임팩트</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>환승노선 확충/환승 유입 유도 → 혼잡 완화 방향성 확인</li>
              <li>섬식 플랫폼이 혼잡도 유발 요인 중 하나임을 확인인</li>
              <li>월·화 피크 타깃 근무 유연화(시차 출근) 정책 근거 제공</li>
            </ul>
          </div>
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



        {/* 링크 */}
        {/* <div className="mt-6">
          <h3 className="font-semibold mb-2">문서/링크</h3>
          <div className="text-sm text-muted-foreground">
            <a href="#" target="_blank" rel="noreferrer" className="underline underline-offset-2">논문 PDF 보기</a>
          </div>
        </div> */}



        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          2
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
          5
        </div>
      </div>

      {/* 프로젝트 6: AI 글쓰기 보조 에이전트 */}
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
          6
        </div>
      </div>

      {/* 프로젝트 7: KTX 수요 예측 */}
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
          7
        </div>
      </div>

      {/* 프로젝트 8: 기부자 특성 분석 */}
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
              <Badge className="text-xs px-2 py-1">Logistic Regression</Badge>
              <Badge className="text-xs px-2 py-1">Random Forest</Badge>
              <Badge className="text-xs px-2 py-1">XGBoost</Badge>
              <Badge className="text-xs px-2 py-1">LGBM</Badge>
              <Badge className="text-xs px-2 py-1">CatBoost</Badge>
              <Badge className="text-xs px-2 py-1">SHAP</Badge>
            </div>

            <h3 className="font-semibold mb-2">프로젝트 개요</h3>
            <p className="text-sm text-muted-foreground mb-4">
              기부자들의 특성을 분석하여 기부 여부를 예측하는 머신러닝 모델을 개발했습니다. 
              다양한 알고리즘을 비교 분석하고 SHAP를 활용하여 변수 중요도를 분석했습니다.
            </p>
          </div>
        </div>

        {/* 핵심 정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <StatCard icon={Database} label="데이터 기간" value="2005 – 2023" sub="KOWEPS 패널" />
          <StatCard icon={BarChart3} label="목표 변수(Y)" value=">= 1만원/1년 기부 여부" sub="Binary (Yes/No)" />
          <StatCard icon={Filter} label="불균형 처리" value="Downsample Negative" sub="Class balance" />
        </div>

        {/* 데이터 정제 & 전처리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">데이터 & 전처리</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>활용 변수(X): 목표 변수 제외 <b>모든 항목</b>에서 후보 선정</li>
              <li>결측률  50% 변수를 <b>삭제</b>, 유일값 1개 변수 <b>삭제</b></li>
              <li>개인 식별(ID 등) 및 가중치 등 <b>분석 불필요 변수 제거</b></li>
              <li>범주형 인코딩·수치형 스케일링(필요 시) 적용</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">모델링 & 평가</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>ML 5종(LogReg, RF, XGB, LGBM, CatBoost) + DL 2종(MLP, CNN) 비교</li>
              <li>불균형 대응: Negative 클래스 <b>다운샘플링</b></li>
              <li>지표: AUC/F1/Recall/Precision</li>
              <li>XAI: <b>SHAP</b> Summary/Dependence로 <b>주요 변수 식별</b></li>
            </ul>
          </div>
        </div>

        {/* 성과 & 인사이트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">주요 성과</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>다양한 알고리즘 스택 적용 및 최적 모델 선별</li>
              <li>Downsampling으로 클래스 불균형 완화 및 재현율 개선</li>
              <li>SHAP 기반 변수 중요도 분석 및 <b>기부 결정 요인</b> 도출</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">비즈니스 인사이트</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>기부자 특성별 <b>타겟팅 전략</b> 수립을 위한 핵심 요인 도출</li>
              <li>기부 확률이 높은 잠재 기부자 <b>선별 모델</b> 구축</li>

            </ul>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
          8
        </div>
      </div>
    </div>
  );
} 