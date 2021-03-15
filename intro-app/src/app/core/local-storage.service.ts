import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: any = localStorage;
  constructor() {}

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any | undefined {
    return JSON.parse(this.storage.getItem(key)) || undefined;
  }

  exists(key: string): boolean {
    return !!this.storage.getItem(key);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
