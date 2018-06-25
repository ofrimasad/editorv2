import {Injectable} from "@angular/core";

@Injectable()
export class ShowimageService{

  img1:string = "";
  img2:string = "";
  lastDataUrl:string = "";
  native ;
  obj;
  originalImageUrl:string;
  resultImageUrl:string;
  imageSizeWidth;
  imageSizeHeight;
  apiId:string;
  apiUrl:string;
  applyShadow:boolean = true;
  applyTransparent:boolean = false;
  editedStuff;
  resultEditMaskImageUrl:any;
  resultUrl:string;
  showimageService:boolean;
  imageId:number;
  secret:string;
  wrapperShadow:string;
  wrappermarginTop:number;

}
