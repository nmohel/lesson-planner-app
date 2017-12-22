import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../data.service';
import { Topic } from '../../topic';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  @Input() courseId
  @Input() selectedDate 
  topics : Topic[] = [];

  constructor(private _dataService : DataService) {
    console.log("CourseId: ", this.courseId);
    console.log("selectedDate: ", this.selectedDate)

   }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log("changes to selected date: ", this.selectedDate);
    this.topics = this._dataService.getTopics(this.courseId, this.selectedDate);
    console.log(this.topics);
  }

  

}
