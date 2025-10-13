export class Logger {
  private readonly namespace: string;
  private readonly logger: Console;
  constructor(namespace?: string) {
    this.namespace = namespace || 'default';
    this.logger = console;
  }

  log(...args: any[]) {
    return this.logger.log(`[${this.namespace}]`, ...args, this.getStack());
  }

  error(...args: any[]) {
    return this.logger.error(`[${this.namespace}]`, ...args, this.getStack());
  }

  warn(...args: any[]) {
    return this.logger.warn(`[${this.namespace}]`, ...args, this.getStack());
  }

  info(...args: any[]) {
    return this.logger.info(`[${this.namespace}]`, ...args, this.getStack());
  }

  debug(...args: any[]) {
    return this.logger.debug(`[${this.namespace}]`, ...args, this.getStack());
  }

  private getStack() {
    const { stack } = new Error();
    const text = stack?.split('\n')[3] || '';
    const regex = /\(([^)]+)\)/; // 匹配括号内的内容
    const match = text.match(regex);
    const content = match?.[1] || ''; // 提取括号内的内容
    const filePath = content.replace(/\?t=\d+/, '');
    return filePath ? `\n${filePath}` : '';
  }
}
