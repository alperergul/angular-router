import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private coursesService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {
    const courseUrl = route.paramMap.get("courseUrl");

    return this.coursesService.loadCourseByUrl(courseUrl);
  }
}
