declare module '*.svg' {
  import * as React from 'react';
  const SVG: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      width?: string;
      height?: string;
      alt?: string;
    }
  >;
  export default SVG;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}
