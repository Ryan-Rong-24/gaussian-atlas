import { HeroSection } from './HeroSection';
import { ExternalLink, Check } from 'lucide-react';

interface LandingPageProps {
  onEnterGallery: () => void;
}

export const LandingPage = ({ onEnterGallery }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection onEnterGallery={onEnterGallery} />
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Large-scale</h3>
                <p className="text-muted-foreground">
                  254,919 unique fittings, including 81,956 high-aesthetic samples (score &gt; 5). 
                  <a 
                    href="https://github.com/LAION-AI/aesthetic-predictor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-1 text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">High quality</h3>
                <p className="text-muted-foreground">
                  3D Gaussian splats reconstructed with a state-of-the-art optimization pipeline, totaling &gt; 1.2 GPU-years of compute.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">User-friendly</h3>
                <p className="text-muted-foreground">
                  Plug-and-play PyTorch dataloader with step-by-step instructions, plus conversion scripts to export into WebDataset shards for maximum I/O efficiency.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid idea tryout</h3>
                <p className="text-muted-foreground">
                  A "playground" that lets you drop in your generative model for swift prototyping and idea testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Download</h2>
          
          {/* Metadata Files */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Metadata & Model Statistics</h3>
            <div className="space-y-3 max-w-3xl mx-auto">
              {[
                { name: 'aesthetic_list.json', desc: 'List of high-aesthetic samples (score > 5)' },
                { name: 'non_aesthetic_list.json', desc: 'List of remaining samples' },
                { name: 'gaussianverse_mean.pt', desc: 'Mean statistics for GaussianVerse dataset' },
                { name: 'gaussianverse_std.pt', desc: 'Standard deviation statistics for GaussianVerse dataset' },
                { name: 'sphere2plane.npy', desc: 'Mapping between points on sphere surface and optimally transported coordinates of a square plane' },
              ].map((file) => (
                <a
                  key={file.name}
                  href={`https://downloads.cs.stanford.edu/vision/gaussianverse/${file.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{file.name}</h4>
                      <p className="text-sm text-muted-foreground">{file.desc}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Aesthetic Chunks */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">High-Aesthetic Set (81,956 fittings)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {Array.from({ length: 9 }, (_, i) => (
                <a
                  key={`aesthetic-${i}`}
                  href={`https://downloads.cs.stanford.edu/vision/gaussianverse/GaussianVerse_aesthetic_chunk_${i}.zip`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">Aesthetic Chunk {i}</span>
                    <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Non-Aesthetic Chunks */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Remaining Set (172,963 fittings)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {Array.from({ length: 18 }, (_, i) => (
                <a
                  key={`chunk-${i}`}
                  href={`https://downloads.cs.stanford.edu/vision/gaussianverse/GaussianVerse_chunk_${i}.zip`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">Chunk {i}</span>
                    <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section id="citation" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Citation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <pre className="text-sm text-foreground font-mono whitespace-pre-wrap break-words overflow-wrap-anywhere">
{`@inproceedings{gaussianatlas2025,
  title     = {Repurposing 2D Diffusion Models with Gaussian Atlas for 3D Generation},
  author    = {Xiang, Tiange and Li, Kai and Long, Chengjiang and H{\\"a}ne, Christian and Guo, Peihong and Delp, Scott and Adeli, Ehsan and Fei-Fei, Li},
  booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
  year      = {2025}
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section id="acknowledgment" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Acknowledgment</h2>
          <div className="space-y-4 max-w-3xl mx-auto text-center text-muted-foreground">
            <p>
              This page was made possible by{' '}
              <a 
                href="https://ryan-rong-24.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Ryan Zhijie Rong
              </a>
            </p>
            <p>
              Web rendering is based on{' '}
              <a 
                href="https://github.com/sparkjsdev/spark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Spark
              </a>
              {' '}@{' '}
              <a 
                href="https://www.worldlabs.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                World Labs
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};