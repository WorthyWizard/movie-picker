// import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
// import { Motion } from "react-motion";

// import { AnimationStructure } from "@/animations/types";

// export const withAnimation = <Props extends Record<string, unknown>>(
//   WrappedComponent: FC<Props>,
//   animation: AnimationStructure,
//   wrapperProps?: DetailedHTMLProps<
//     HTMLAttributes<HTMLDivElement>,
//     HTMLDivElement
//   >
// ) => {
//   const { style: wrapperStyle, ...wrapperPropsRest } = wrapperProps ?? {};

//   // eslint-disable-next-line react/display-name
//   return (props: Props) => (
//     <Motion defaultStyle={animation.from} style={animation.to}>
//       {(style) => (
//         <div
//           {...wrapperPropsRest}
//           style={{ ...animation.getStyle(style), ...wrapperStyle }}
//         >
//           <WrappedComponent {...props} />
//         </div>
//       )}
//     </Motion>
//   );
// };
// eslint-disable-next-line react/display-name, @typescript-eslint/no-unused-vars
export const withAnimation = (C: any, a: any, s?: any) => (props: any) => (
  <C {...props} />
);
