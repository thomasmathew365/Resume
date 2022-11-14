import { ComponentWithChildren } from '../types';

export default function AppLayout({ children }: ComponentWithChildren) {
    return (
        <div style={{"border":"10px solid blue"}}>
            {children}
        </div>
  )
}