import React, { useEffect } from 'react';
import { Welcome } from 'src/components';
import { useLayoutStore } from 'src/store';

export const DashboardPage = () => {
  const { setSetting } = useLayoutStore();
  useEffect(() => {
    setSetting({
      navbarCollapsed: false,
    });
  }, []);
  return (
    <>
      <Welcome />
    </>
  );
};
