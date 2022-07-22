import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import instance from '../api/instance';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  //
  // const router = useRouter();
  // const { id } = router.query;

  // function getParam() {
  //   const param = '/' + id;
  //   if (id) {
  //     return param;
  //   } else {
  //     return '';
  //   }
  // }
  //
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: async (url) => await instance.get(url),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
