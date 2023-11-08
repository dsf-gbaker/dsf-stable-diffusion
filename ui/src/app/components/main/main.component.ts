import { Component } from '@angular/core';
import { AlertType } from '../alert/alert.component';
import { EImageMode, EImageSize, ImageProvider } from 'src/app/interfaces/imageprovider.interface';
import { LLamaImageProviderService } from 'src/app/services/llamaimageprovider/llamaimageprovider.service';
import { EMPTY, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [{ provide: ImageProvider, useClass: LLamaImageProviderService }]
})
export class MainComponent {

  placeholder     = 'Enter your prompt here...';
  negplaceholder  = 'Enter a negative prompt here to further refine what you do NOT want.';
  alertType       = AlertType.none;
  prompt          = '';
  negprompt       = '';
  alertMsg        = '';
  img             = '';
  progress        = 100;
  maxprogress     = 100;
  working         = false;

  constructor(private imager: ImageProvider) {}

  onDismissAlert(val?: any) {
    this.alertMsg = '';
    this.alertType = AlertType.none;
  }

  public onGenerateImage() {

    this.onDismissAlert();
    this.prompt.trim();
    this.negprompt.trim();
    let prompt = this.prompt;

    if (prompt.length <= 0) {
      this.alertType = AlertType.warning;
      this.alertMsg = 'Prompt is empty...please enter some text.'
      return;
    }
    
    if (this.negprompt.length > 0) {
        prompt += '|' + this.negprompt;
    }

    this.working = true;

    // TODO: make image size dynamic
    this.imager.createImage(prompt, EImageSize.small, 40, EImageMode.linear)
      .pipe(catchError((e: HttpErrorResponse, src) => { 
          console.log(JSON.stringify(e));
          this.working = false;

          let msg = 'HTTP ' + e.status.toString() + ' :: ';

          if (e.status === 0) {
            msg += 'Unable to connect to the server. Is your LLama Docker image running?';
          }
          else {
            msg += e.message;
          }

          this.alertMsg   = msg;

          this.alertType  = AlertType.error;
          return EMPTY;
        })
      )
      .subscribe(res => {
        console.log('Response Recieved...');
        console.log(JSON.stringify(res));
        this.working = false;
        this.img = res.filelocation;
      });
  }
}
