
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'sonner@2.0.3': 'sonner',
        'jsr:@supabase': 'jsr:',
        'figma:asset/fd022ff8afea47b950bcf9c321df1f06d24eeace.png': path.resolve(__dirname, './src/assets/fd022ff8afea47b950bcf9c321df1f06d24eeace.png'),
        'figma:asset/fc8af43061d82b872aeef55d4e67dece8f02c575.png': path.resolve(__dirname, './src/assets/fc8af43061d82b872aeef55d4e67dece8f02c575.png'),
        'figma:asset/eba88ce53b228a34ea5ad37751ab56bb9c101f6b.png': path.resolve(__dirname, './src/assets/eba88ce53b228a34ea5ad37751ab56bb9c101f6b.png'),
        'figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png': path.resolve(__dirname, './src/assets/ddae9a87c44079ea58a9a4302f88e72c330120cd.png'),
        'figma:asset/dad425db94f84361cd20b779316b74a7f98662a2.png': path.resolve(__dirname, './src/assets/dad425db94f84361cd20b779316b74a7f98662a2.png'),
        'figma:asset/d9faf21f4457be2dfec41979673dfa028f9491a4.png': path.resolve(__dirname, './src/assets/d9faf21f4457be2dfec41979673dfa028f9491a4.png'),
        'figma:asset/d799cc730f1bf8d3c7804cba6580800dc772354f.png': path.resolve(__dirname, './src/assets/d799cc730f1bf8d3c7804cba6580800dc772354f.png'),
        'figma:asset/cc8399b758ae35654750afd69402f4d84aa054ba.png': path.resolve(__dirname, './src/assets/cc8399b758ae35654750afd69402f4d84aa054ba.png'),
        'figma:asset/c8aef5ebec69305b4618ca6a832edb8b1f501ee6.png': path.resolve(__dirname, './src/assets/c8aef5ebec69305b4618ca6a832edb8b1f501ee6.png'),
        'figma:asset/b1763f40b660ea37bdd99b911d92264472498e83.png': path.resolve(__dirname, './src/assets/b1763f40b660ea37bdd99b911d92264472498e83.png'),
        'figma:asset/ad0656988e96724fb4c8a09ab70deb7ba75c8c37.png': path.resolve(__dirname, './src/assets/ad0656988e96724fb4c8a09ab70deb7ba75c8c37.png'),
        'figma:asset/a9ea79898f49abf3c0ff96a2150d45adc3f32646.png': path.resolve(__dirname, './src/assets/a9ea79898f49abf3c0ff96a2150d45adc3f32646.png'),
        'figma:asset/a0571edd402cd3898525efc91947b607462ad0b1.png': path.resolve(__dirname, './src/assets/a0571edd402cd3898525efc91947b607462ad0b1.png'),
        'figma:asset/9f044ae93909e7fd97a060db97a4ba0fdfb38125.png': path.resolve(__dirname, './src/assets/9f044ae93909e7fd97a060db97a4ba0fdfb38125.png'),
        'figma:asset/8cd16c648535b962006e31cec6253d533315ca08.png': path.resolve(__dirname, './src/assets/8cd16c648535b962006e31cec6253d533315ca08.png'),
        'figma:asset/78225c81e42df94a4d8bb62867b1a8490bc3d242.png': path.resolve(__dirname, './src/assets/78225c81e42df94a4d8bb62867b1a8490bc3d242.png'),
        'figma:asset/67284ab95332ef022522f113ef1bd99fa59be7fa.png': path.resolve(__dirname, './src/assets/67284ab95332ef022522f113ef1bd99fa59be7fa.png'),
        'figma:asset/64d33414a70492a28bfc7b75657346fe6d4e975f.png': path.resolve(__dirname, './src/assets/64d33414a70492a28bfc7b75657346fe6d4e975f.png'),
        'figma:asset/5cb1cb85e10e9c83e69affc04caae0601b1e01a2.png': path.resolve(__dirname, './src/assets/5cb1cb85e10e9c83e69affc04caae0601b1e01a2.png'),
        'figma:asset/539b24fc3335b92b60316e4fd55fd95220be0afc.png': path.resolve(__dirname, './src/assets/539b24fc3335b92b60316e4fd55fd95220be0afc.png'),
        'figma:asset/3db52eb6b4bdec79aef3b44a2ed267a7d243cf89.png': path.resolve(__dirname, './src/assets/3db52eb6b4bdec79aef3b44a2ed267a7d243cf89.png'),
        'figma:asset/3a139f5c438cc3d08ea7f3470b38333bcbc7e543.png': path.resolve(__dirname, './src/assets/3a139f5c438cc3d08ea7f3470b38333bcbc7e543.png'),
        'figma:asset/2cdb640c22c46ecfa0a9e3999a8a56eb8ca9d592.png': path.resolve(__dirname, './src/assets/2cdb640c22c46ecfa0a9e3999a8a56eb8ca9d592.png'),
        'figma:asset/2ac0cad31ea5567b2df62d7a40c391b7184aff80.png': path.resolve(__dirname, './src/assets/2ac0cad31ea5567b2df62d7a40c391b7184aff80.png'),
        'figma:asset/24733bcce8b67c72b4c746bc391d514e7acb5793.png': path.resolve(__dirname, './src/assets/24733bcce8b67c72b4c746bc391d514e7acb5793.png'),
        'figma:asset/1abf7516e268ccef20abc3127374b4bad589b3c2.png': path.resolve(__dirname, './src/assets/1abf7516e268ccef20abc3127374b4bad589b3c2.png'),
        'figma:asset/0ee9d70a8b6f484ef6801ef361ebdff714fe3068.png': path.resolve(__dirname, './src/assets/0ee9d70a8b6f484ef6801ef361ebdff714fe3068.png'),
        'figma:asset/04c2d3cbe3f44477a650c883d9d23006d4f70304.png': path.resolve(__dirname, './src/assets/04c2d3cbe3f44477a650c883d9d23006d4f70304.png'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  });