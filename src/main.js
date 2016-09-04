
import { SampleBannerPlacement } from './placements/SampleBannerPlacement'
import { SampleHeroPlacement } from './placements/SampleHeroPlacement'

function main(){
    new SampleBannerPlacement("#banner-1");
    new SampleBannerPlacement("#banner-2");

    new SampleHeroPlacement(".hero");
}

main();