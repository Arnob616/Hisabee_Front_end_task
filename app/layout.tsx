@@ .. @@
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
-import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
+import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const inter = Inter({ subsets: ['latin'] });
@@ .. @@
        <QueryClientProvider client={queryClient}>
          {children}
-          <ReactQueryDevtools initialIsOpen={false} />
+          {process.env.NODE_ENV === 'development' && (
+            <ReactQueryDevtools initialIsOpen={false} />
+          )}
        </QueryClientProvider>
      </body>
    </html>