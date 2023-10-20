import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";

@Injectable({ providedIn: "root" })
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private coures: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<LessonDetail> {
    const courseUrl = route.parent.paramMap.get("courseUrl"),
      lessonSeqNo = route.paramMap.get("lessonSeqNo");
    return this.coures.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
