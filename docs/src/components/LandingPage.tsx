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
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">GaussianVerse_Set1.zip</h3>
                  <p className="text-muted-foreground">81,956 fittings with &gt;5 aesthetic scores.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">GaussianVerse_Set2.zip</h3>
                  <p className="text-muted-foreground">Remaining 172,963 fittings.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Sphere_to_Plane_Mapping.npy</h3>
                  <p className="text-muted-foreground">The mapping between points on the surface of a sphere and a optimally transported coordinates of a square plane by equiprojection.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              </div>
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
              Renderings are sampled from{' '}
              <a 
                href="https://gobjaverse.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GObjaverse
              </a>
            </p>
            <p>
              3DGS fitting methods are based on{' '}
              <a 
                href="https://github.com/EDGS-R/EDGS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                EDGS
              </a>
            </p>
            <p>
              3DGS web rendering is based on{' '}
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