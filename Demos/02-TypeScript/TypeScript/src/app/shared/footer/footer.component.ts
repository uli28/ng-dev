import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private sns: SnackbarService) {}

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleEditor() {
    this.sns.displayAlert('Info', 'Not implemented - just a mock');
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a mock');
  }
}
