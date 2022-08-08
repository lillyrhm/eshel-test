// import * as WEbVitals from 'web-vitals';
// import 'web-vitals/dist/modules/index';

// import { ReportHandler } from 'web-vitals/dist/modules/types';

import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
