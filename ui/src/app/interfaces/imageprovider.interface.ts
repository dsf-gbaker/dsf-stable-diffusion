import { Injectable } from '@angular/core'
import { Observable, EMPTY } from 'rxjs';

export interface IImageResponse {
  filelocation: string;
}

export enum EImageSize {
  small   = '256x256',
  large   = '512x512',
  xlarge  = '1024x1024'
}

export enum EImageMode {
    linear = 0,
    rife,
    vaelinear,
    vaeslerp,
    film
}

@Injectable({
  providedIn: 'root'
})
export abstract class ImageProvider {
  abstract createImage(prompt: string, size?: EImageSize, step?: number, mode?: EImageMode): Observable<IImageResponse>
}
