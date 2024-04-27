import { AgencyPage } from "../../sections";


const texts = [
    {
        name: 'Brief',
        description: "Complete brief writing or simple duidance on what to include, we've got you covered"
    },
    {
        name: 'Search',
        description: "In-depth agency search covering; criteria matching,door knocking and due-diligence vetting"
    },
    {
        name: 'Pitch',
        description: "Comprehensive pitch management, including comms, diary management and pitch hosting."
    },
]

function Agency() {
    return <div>
        <AgencyPage texts={texts} image={'/img/video.png'} title={'Managed agency selection'} subTitle={'Strengthen your onboarding process'}/>
    </div>
}

export default Agency