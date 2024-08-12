import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const updateReqUrl = req.clone({
    url: `https://dummyjson.com/${req.url}/?delay=1500`
  })

  return next(updateReqUrl).pipe(
    catchError(error => {
      console.log(error);
      return throwError(() => error);
    })
  );
};
