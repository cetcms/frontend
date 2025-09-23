import React from 'react';
import { create } from 'zustand';

interface PageInfo {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
}

interface Setting {
  navbarCollapsed?: boolean;
  fixedHeadSection?: boolean;
}

// 为 slice state 定义一个类型
interface LayoutState {
  leftSection?: React.ReactNode;
  topSection?: React.ReactNode;
  headSection?: React.ReactNode;
  pageInfo?: PageInfo;
  setting?: Setting;
}

interface LayoutAction {
  setLeftSection: (payload: React.ReactNode) => void;
  setTopSection: (payload: React.ReactNode) => void;
  setHeadSection: (payload: React.ReactNode) => void;
  unsetSections: () => void;
  setPageInfo: (payload: PageInfo) => void;
  clearPageInfo: () => void;
  setSetting: (payload: Setting) => void;
}

export const useLayoutStore = create<LayoutState & LayoutAction>((set) => ({
  pageInfo: {},
  setPageInfo: (payload: PageInfo) => {
    set((state) => ({
      pageInfo: {
        ...state.pageInfo,
        ...payload,
      },
    }));
  },
  setting: {},
  setSetting: (payload: Setting) => {
    set((state) => ({
      setting: {
        ...state.setting,
        ...payload,
      },
    }));
  },
  leftSection: null,
  topSection: null,
  headSection: null,
  clearPageInfo: () => {
    set({ pageInfo: {} });
  },
  setLeftSection: (payload: React.ReactNode) => {
    set({ leftSection: payload });
  },
  setTopSection: (payload: React.ReactNode) => {
    set({ topSection: payload });
  },
  setHeadSection: (payload: React.ReactNode) => {
    set({ headSection: payload });
  },
  unsetSections: () => {
    set({ leftSection: null, topSection: null, headSection: null });
  },
}));
