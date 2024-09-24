docker build --build-arg VITE_RESEND_KEY=re_CouwkZBV_M3HAaEUD5Yk2NXXDXugUKr8N --build-arg VITE_EMAIL=stephengrzn@gmail.com -t stephen10121/horizionlandscaping:1.0 .
docker tag stephen10121/horizionlandscaping:1.0 stephen10121/horizionlandscaping:latest
docker push stephen10121/horizionlandscaping:latest