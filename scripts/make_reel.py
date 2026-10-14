"""Encode the selected editorial frames as a silent 30-second vertical H.264 clip."""
import argparse
import subprocess
from pathlib import Path
import imageio_ffmpeg

parser = argparse.ArgumentParser()
parser.add_argument('--frames', required=True)
parser.add_argument('--output', required=True)
args = parser.parse_args()
frames = Path(args.frames).resolve()
output = Path(args.output).resolve()
output.parent.mkdir(parents=True, exist_ok=True)
selected = [frames / f'reel-{i:02}.png' for i in range(1, 7)]
for frame in selected:
    if not frame.is_file():
        raise FileNotFoundError(frame)
# Image2 gives every selected image its full five-second duration, including the
# final image. The fps filter produces exactly 720 frames without a lost tail.
subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-hide_banner', '-loglevel', 'warning',
                '-framerate', '1/5', '-start_number', '1', '-i', str(frames / 'reel-%02d.png'),
                '-vf', 'fps=24', '-frames:v', '720', '-fps_mode', 'cfr', '-an',
                '-c:v', 'libx264', '-threads', '1', '-preset', 'medium', '-crf', '20',
                '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(output)], check=True)
print(output)
