import { getAllComposers, getComposer } from "@/app/firebase/queries"
import ComposerImage from "@/components/ComposerImage";
import PlayablePiece from "@/components/playablePiece";
import { title } from "@/components/primitives";
import Link from "next/link";

export async function generateStaticParams() {
    const composers = await getAllComposers();

    return composers.map((composer) => ({
        slug: composer.id,
    }))

}

export default async function Page({ params }: { params: { id: string } }) {
    const composer = await getComposer(params.id);

    const popularPieces = composer?.popular?.map((popular: string) => {
        return (
            <PlayablePiece key={popular} filename={popular} />
        )
    })


    return (
        <>
         {
 composer ? (
    <>
    <div className="w-100 flex justify-center flex-col-reverse md:flex-row">
        {/* <p>ID: {params.id}</p>
    <p>sdf</p>
    <p>composer {post?.name}</p> */}

        <div className="md:basis-1/4 md:max-h-80">
            <ComposerImage url={composer?.image} />

        </div>
        <div className="md:basis-3/4 flex gap-4 pb-4 flex-col  md:px-5">
            <h1 className={`text-3xl md:text-8xl font-black sm:text-6xl md:relative -left-10 z-10`}>{composer?.lastName}</h1>
            <p className="text-xl font-thin">{composer?.name}</p>
            <p className="">{composer?.description}</p>
        </div>
    </div>
    <div className="w-100 py-5 ">
        <h1 className="text-xl font-thin mb-5">popular</h1>

        {popularPieces ? (popularPieces) : (<p>No pieces to show.</p>)}
    </div>
</>
) : (
    <>
    <p>There is no composer at this URL. </p>
    <Link href="/composers">Back to composers</Link>
    </>
)

         }
        </>
       


    )
}