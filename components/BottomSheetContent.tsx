import React, { ReactNode } from 'react';

interface BottomSheetContentProps {
  children: ReactNode;
}

export const BottomSheetContent: React.FC<BottomSheetContentProps> = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'auto',  // Dùng overflowY thay cho overflow để chỉ cuộn dọc
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};
