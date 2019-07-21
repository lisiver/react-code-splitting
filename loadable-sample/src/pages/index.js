import withSplitting from '../hocs/withSplitting';

export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const SplitMe = withSplitting(() => import('./SplitMe'));
