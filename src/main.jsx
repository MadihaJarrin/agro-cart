import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';


import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <RouterProvider router={router} /> */}
      <QueryClientProvider client={queryClient}>
        <div>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
