// 事件总线
class _EventBus {
  private readonly events: { [key: string]: Array<(data?: any) => void> };
  constructor() {
    this.events = {};
  }
  on(event: string, callback: () => void) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
  emit(event: string, data?: any) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }
}

export const EventBus = new _EventBus();

export enum EventBusEnum {
  ResetFilter = 'ResetFilter',
}
