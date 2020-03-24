import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from 'src/app/interfaces/i-event';

@Pipe({
  name: 'eventsFilter'
})
export class EventsFilterPipe implements PipeTransform {

  transform(events: IEvent[], searchText: string): any {
    if (!searchText) {
      return events;
    }
    return events.filter((event: IEvent) => {
      return event.text
        .trim()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }

}
