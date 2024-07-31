export const layout = "master.vto";
export const url = ({data}: Lume.Data) => {
    return `/${data.title}-${data.jobLocation.address.addressLocality}/`;
};