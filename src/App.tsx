import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { OnePageResume } from './components/OnePageResume';
import { Portfolio } from './components/Portfolio';
import { Printer, FileText, Briefcase } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'resume' | 'portfolio'>('resume');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="portfolio-container">
      {/* 화면에서만 보이는 컨트롤 버튼들 */}
      <div className="no-print fixed top-4 right-4 z-10 flex gap-2">
        <Button 
          variant={currentView === 'resume' ? 'default' : 'outline'}
          onClick={() => setCurrentView('resume')}
          className="shadow-lg"
        >
          <FileText className="w-4 h-4 mr-2" />
          이력서
        </Button>
        <Button 
          variant={currentView === 'portfolio' ? 'default' : 'outline'}
          onClick={() => setCurrentView('portfolio')}
          className="shadow-lg"
        >
          <Briefcase className="w-4 h-4 mr-2" />
          포트폴리오
        </Button>
        <Button onClick={handlePrint} className="shadow-lg">
          <Printer className="w-4 h-4 mr-2" />
          PDF로 저장
        </Button>
      </div>

      {/* 현재 선택된 뷰 렌더링 */}
      {currentView === 'resume' ? <OnePageResume /> : <Portfolio />}
    </div>
  );
}