
import ShowDetails from "@/app/components/People/ShowDetails";

export async function getStaticPaths() {
        // Call an external API endpoint to get people
        const characters = await fetch(
            `${process.env.NEXT_PUBLIC_AKABAB_API_URL}/all.json`
        ).then((res) => res.json());
        // Get the paths we want to prerender based on posts
        // In production environments, prerender all pages
        // (slower builds, but faster initial page load)
        const paths = characters.map((people) => {
            return {
                params: {name: people.name.split(' ').join('_')}
            }
        })
    
        return { paths, fallback: false }
  }
  
    export async function generateStaticParams() {
        const characters = await fetch(
            `${process.env.NEXT_PUBLIC_AKABAB_API_URL}/all.json`
        ).then((res) => res.json());

        return characters.map((people) => ({
            slug: people.split(' ').join('_'),
        }))
    }

    const ShowPeople = ({params}) => {

        return (
           <ShowDetails activeCharacter={params.name.split('_').join(' ')} />
        )
    }

    export default ShowPeople