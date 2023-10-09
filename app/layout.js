import "./globals.css";
import { lato, DMSans } from "@/font";
import LayoutMain from "@/components/LayoutMain";
import {Provider} from "@/utils/next-export"
import {store} from "@/store"
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${DMSans.variable} ${lato.variable}`}>
      {/* className="overflow-hidden" */}
      <body className="overflow-hidden relative">
        <Provider store={store}>
       <LayoutMain children = {children}/>
       </Provider>
      </body>
    </html>
  );
}
