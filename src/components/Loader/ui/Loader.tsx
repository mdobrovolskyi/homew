import { Blocks } from 'react-loader-spinner'
import useWikiStore from '../../../store/wikiStore'

export const Loader = () => {
    const { loading } = useWikiStore()
    return (
        <>{loading && <Blocks width={30} height={30} ariaLabel="loading" />}</>
    )
}
