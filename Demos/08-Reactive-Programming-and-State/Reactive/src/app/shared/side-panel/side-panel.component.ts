import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { EventBusService } from '../../demos/samples/event-bus/event-bus.service';
import { SidebarActions } from 'src/app/demos/samples/event-bus/sidebar-actions';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  constructor(private sns: SnackbarService, private eb: EventBusService) {}

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    this.eb.triggerCmd(
      this.editorDisplayed
        ? SidebarActions.SHOW_MARKDOWN
        : SidebarActions.HIDE_MARKDOWN
    );
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }
}
