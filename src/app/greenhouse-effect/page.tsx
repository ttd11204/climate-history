
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to climate history page
  redirect('/climate-history');
}