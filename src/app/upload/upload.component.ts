import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  

  selectedFile: File = null;

  constructor(private _auth: AuthService,) {}

  ngOnInit(): void {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    
    this._auth.upload(fd)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    ) 
  }
}
