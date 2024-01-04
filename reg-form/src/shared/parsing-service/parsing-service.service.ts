import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetjsonPipe } from '../tranformjsondata/tranformjsondata.pipe';

@Injectable()
export class ParsingServiceService {
  jsonDataResult: any;
  finalize: string | undefined = '';
  constructor(private http: HttpClient) {}
  async dataGetter(data: any) {
    await this.http.get('../../assets/languages/languages.json').toPromise().then((res) => {
      data = res;
      console.log(data);
  });
  return data;
}

  
async dataSetter() {
  this.jsonDataResult = await this.dataGetter(this.jsonDataResult);
  return this.jsonDataResult;
}
}