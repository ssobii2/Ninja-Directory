import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import ninjaData from '../../assets/ninja.json';

interface Ninja {
  name: string,
  belt: string
}

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  term = "";
  ninjas: Ninja[] = ninjaData;

  constructor(private logger: LoggingService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit(): void {
  }
}
