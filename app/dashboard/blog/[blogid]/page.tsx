type Params = {
     params: {
          blogid: string
     }
}
export default function Blog({ params }: Params) {
     return (
          <main className="m-8 text-xl ">
               Blog Id : {params.blogid}
          </main>
     );
}
