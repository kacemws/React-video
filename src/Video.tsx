import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={240}
				fps={60}
				width={1920}
				height={1080}
				defaultProps={{
					titleText:
						'Hi! im belkacem and this video was made with react & remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
