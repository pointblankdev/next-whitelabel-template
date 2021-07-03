import { dehydrate } from "react-query/hydration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTitle } from "react-use";
import 'twin.macro'

const Home: React.FC = () => {
    useTitle("Next Whitelabel Template");

    return (
        <div tw='text-3xl'>Next Whitelabel Template</div>
    );
};

export default Home;
