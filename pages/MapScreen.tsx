import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const MapScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mecânica Especialização</Text>
          <Text style={styles.subtitle}>- Especificações</Text>
          <Text style={styles.subtitle}>- Especificações</Text>
          <Text style={styles.subtitle}>- Especificações</Text>
        </View>
        <Text style={styles.rating}>4.9 ★</Text>
      </View>
      
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Localização</Text>
        <Image 
          source={{ uri: 'https://example.com/map.png' }} 
          style={styles.mapImage} 
        />
        <Text style={styles.address}>Rua Carlos Gomes 1245, Bairro</Text>
      </View>

      <View style={styles.photosContainer}>
        <Text style={styles.photosTitle}>Fotos</Text>
        <ScrollView horizontal>
          {/* Replace these with actual image URLs */}
          <Image source={{ uri: 'https://example.com/photo1.png' }} style={styles.photo} />
          <Image source={{ uri: 'https://example.com/photo2.png' }} style={styles.photo} />
          <Image source={{ uri: 'https://example.com/photo3.png' }} style={styles.photo} />
        </ScrollView>
      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Avaliações</Text>
        <View style={styles.review}>
          <Text style={styles.reviewerName}>João Pedro</Text>
          <Text style={styles.reviewText}>Ótima Mecânica, serviço realizado muito rápido</Text>
          <Text style={styles.reviewRating}>4.9 ★</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewerName}>Eduardo</Text>
          <Text style={styles.reviewText}>Ótima Mecânica, serviço realizado muito rápido</Text>
          <Text style={styles.reviewRating}>4.9 ★</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f39c12',
  },
  contactButton: {
    backgroundColor: '#6c757d',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  locationContainer: {
    marginBottom: 16,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  photosContainer: {
    marginBottom: 16,
  },
  photosTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  photo: {
    width: 120,
    height: 80,
    marginRight: 8,
    borderRadius: 8,
  },
  reviewsContainer: {
    marginBottom: 16,
  },
  reviewsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  review: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 4,
  },
  reviewRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f39c12',
  },
});

export default MapScreen;
