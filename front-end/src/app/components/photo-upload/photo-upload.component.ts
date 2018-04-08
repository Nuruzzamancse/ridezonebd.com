import {Component, OnInit} from "@angular/core";
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { FileService } from '../../services/file.service';

const uri = 'http://localhost:3000/product';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  ngOnInit() {}
  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];



  constructor(private _fileService:FileService){

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }



}
