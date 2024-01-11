import { LayoutAdmin } from "@/Layouts/LayoutAdmin";
import { Userall } from "@/interfaces/PropsUsers";
import { PageProps } from "@/types";

interface PropsIndexAdmin extends PageProps {
  page_base: string,
  users_count: number,
  blogs_count: number,
  products_count: number,
  tags_count: number,
  events_count: number,
  last_users: Userall[]
}

export default function index({
  auth,
  page_base,
  users_count,
  blogs_count,
  products_count,
  tags_count,
  events_count,
  last_users
}: PropsIndexAdmin) {




  return (
    <LayoutAdmin title="Admin - General" pageBase={page_base}>
      <div className="p-4">
        <h1 className="text-2xl font-poppins  font-semibold border-b-2 border-blue-500">Dashboard</h1>
        <div className="flex gap-4 p-4">
          <div className="bg-opacity-75 w-full flex flex-wrap items-start gap-4">
            {/* =============usuarios=================== */}
            <section className="flex gap-4 text-white rounded backdrop-blur-md w-fit bg-blue-600 py-2 px-4">
              <div>
                <h2 className="text-xl">Usuarios</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-7xl">{users_count}</h3>
              </div>
            </section>

            {/* =============Blogs=================== */}
            <section className="flex gap-4 text-white rounded backdrop-blur-md w-fit bg-blue-600 py-2 px-4">
              <div>
                <h2 className="text-xl">Blogs</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-7xl">{blogs_count}</h3>
              </div>
            </section>

            {/* =============eventos=================== */}
            <section className="flex gap-4 text-white rounded backdrop-blur-md w-fit bg-blue-600 py-2 px-4">
              <div>
                <h2 className="text-xl">Eventos</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
              </div>
              <div>
                <h3 className="text-7xl">{events_count}</h3>
              </div>
            </section>

            {/* =============eventos=================== */}
            <section className="flex gap-4 text-white rounded backdrop-blur-md w-fit bg-blue-600 py-2 px-4">
              <div>
                <h2 className="text-xl">Productos</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-7xl">{products_count}</h3>
              </div>
            </section>
            {/* =============== tags ================= */}
            <section className="flex gap-4 text-white rounded backdrop-blur-md w-fit bg-blue-600 py-2 px-4">
              <div>
                <h2 className="text-xl">Tags</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>

              </div>
              <div>
                <h3 className="text-7xl">{tags_count}</h3>
              </div>
            </section>
          </div>
          <div className="rounded-md bg-gray-100 bg-opacity-75 w-full max-w-sm p-2">
            <h3>Últimos usuarios</h3>
            <ul className="grid gap-3 p-2">
              {last_users.map((element) => (
                <li key={element.id} className="leading-3 border-b border-gray-600 pb-2">
                  <p className="text-black font-semibold">{element.name}</p>
                  <p className="text-blue-700">{element.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}
