import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  constructor(private fireStore: AngularFirestore) {}

  getCollection(collectionName: string) {
    return this.fireStore
      .collection(collectionName)
      .snapshotChanges()
      .pipe(
        map((items) => {
          return items.map((doc) => {
            const data: any = doc.payload.doc.data();
            const id = doc.payload.doc.id;
            return {
              id,
              ...data,
            };
          });
        })
      );
  }
  async getItemById(uid: string) {
    return this.fireStore.doc(uid).valueChanges();
  }
  async createItem(collectionName: string, data: any) {
    return this.fireStore.collection(collectionName).add(data);
  }

  async removeItemById(collectionName: string, id: string) {
    return this.fireStore.collection(collectionName).doc(id).delete();
  }
}
